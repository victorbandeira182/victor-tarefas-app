import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url) {
    if(url) {
      return browser.get(url) as Promise<any>;
    }
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.className('title')).getText() as Promise<string>;
  }

  getAuthor() {
    return element(by.css('mat-grid-tile h4')).getText() as Promise<string>;
  }

  getHelpMessage() {
    return element(by.css('h2')).getText() as Promise<string>;
  }
}
