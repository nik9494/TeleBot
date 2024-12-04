import { WebApp } from '@twa-dev/sdk';

export const isRunningInTelegram = () => {
  try {
    return Boolean(WebApp?.initData);
  } catch {
    return false;
  }
};

export const expandWebApp = () => {
  try {
    if (WebApp) {
      WebApp.ready();
      WebApp.expand();
    }
  } catch (error) {
    console.error('Failed to expand WebApp:', error);
  }
};

export const closeWebApp = () => {
  try {
    WebApp?.close();
  } catch (error) {
    console.error('Failed to close WebApp:', error);
  }
};

export const showAlert = (message: string) => {
  try {
    WebApp?.showAlert(message);
  } catch (error) {
    console.error('Failed to show alert:', error);
    alert(message);
  }
};

export const initializeWebApp = () => {
  try {
    if (WebApp) {
      WebApp.ready();
      WebApp.expand();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to initialize WebApp:', error);
    return false;
  }
};