class GalacticNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(observer => observer.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }
}

class DarthVader {
  inform(message) {
    console.log(`Darth Vader has been informed about: ${message.news}`);
  }
}

class HanSolo {
  inform(message) {
    console.log(`Han Solo has been informed about: ${message.news}`);
  }
}

const galacticNews = new GalacticNews();

galacticNews.register(new DarthVader());
galacticNews.register(new HanSolo());

galacticNews.setNews('The Empire continues to search for a rebel base in the Dagobah system.')