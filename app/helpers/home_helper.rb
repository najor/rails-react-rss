module HomeHelper

  def get_rss (url)
    open(url) do |rss|
      feed = RSS::Parser.parse(rss)
      articles = []
      i = 0
      feed.items.each do |item|
        i += 1
        articles.push({
                        title: item.title,
                        description: item.description,
                        link: item.link,
                        id: i
                      })

      end
      return articles
    end
  end
end
