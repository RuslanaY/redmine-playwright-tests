class HomePage {
  constructor(page) {
    this.page = page;

    this.homeLink = page.getByRole('link', { name: 'Home', exact: true });

    this.projectsLink = page.locator('a.projects[href="/projects"]');

    this.helpLink = page.locator('a.help[href="https://www.redmine.org/guide"]');

    this.signInLink = page.locator('a.login[href="/login"]');

    this.registerLink = page.locator('a.register[href="/account/register"]');

    this.overviewLink = page.locator('a.overview');

    this.downloadLink = page.locator('a.download');

    this.activityLink = page.locator('a.activity');

    this.roadmapLink = page.locator('a.roadmap');

    this.issuesLink = page.locator('a.issues');

    this.searchInput = page.locator('#q');
  }

  async open() {
    await this.page.goto('/');
  }

  async search(text) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }
}

module.exports = { HomePage };