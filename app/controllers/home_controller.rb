require 'rss'
require 'home_helper'

class HomeController < ApplicationController
  include HomeHelper
  URLS = %w(http://www.cnet.com/rss/news/ http://www.pcworld.com/index.rss)

  def index
    url = params[:url]
    url = URLS[0] if url.blank?

    render component: 'Home', props: {articles: get_rss(url), url: url}
  end
end
