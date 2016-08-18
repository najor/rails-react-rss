class HomeController < ApplicationController
  def index
    staticArticles = [
      {
        id: 1,
        title: 'News 1',
        description: 'Description 1',
        link: 'http://www.computerweekly.com/news/450302574/Google-takes-on-FaceTime-and-Skype-with-Duo'
      },
      {
        id: 2,
        title: 'News 2',
        description: 'Description 2',
        link: 'http://www.computerweekly.com/news/450302574/Google-takes-on-FaceTime-and-Skype-with-Duo'
      },
      {
        id: 3,
        title: 'News 3',
        description: 'Description 3',
        link: 'http://www.computerweekly.com/news/450302574/Google-takes-on-FaceTime-and-Skype-with-Duo'
      }
    ]
    render component: 'Home', props: {articles: staticArticles}
  end
end
