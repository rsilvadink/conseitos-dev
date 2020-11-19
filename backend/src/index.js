const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);
  return next();
}

function validateProjectId(request, response, next) {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID' });
  }
  return next();
}
app.use(logRequests);
app.use('/projects/:id', validateProjectId);
app.get('/projects', (request, response) => {
  const { title } = request.query;
  const resuts = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;
  response.json(resuts);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner };
  projects.push(project);
  response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;
  response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }
  projects.splice(projectIndex, 1);
  response.status(204).send();
});

app.listen(3333, () => {
  console.log('Back-end started ');
});