require 'rss'
require 'rss_helper'

class HomeController < ApplicationController
  URLS = %w(http://www.cnet.com/rss/news/ http://www.pcworld.com/index.rss)

  def index
    url = params[:url]
    url = URLS[0] if url.blank?

    render component: 'Home', props: {articles: RSSHelper.get_rss(url), url: url}
  end
end
