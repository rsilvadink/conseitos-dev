import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.205.93:3333',
});

/**
 * iOS com Emulador: localhost
 * iOS com fisico: IP da maquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.3.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com fisico: IP da Maquina
 */

export default api;
