require 'rss'
require 'rss_helper'

class HomeController < ApplicationController
  URLS = %w(http://www.cnet.com/rss/news/ http://www.pcworld.com/index.rss)

  def index
    url = params[:url]
    @url = URLS[0] if url.blank?

    render component: 'Home', props: {
      articles: RSSHelper.get_rss(@url),
      url: @url,
      token: form_authenticity_token
    }
  end

  def add_favorite
    article = JSON.parse params[:article]
    fav = Favorite.new do |f|
      f.link = article['link']
      f.source = article['source']
      f.title = article['title']
      f.description = article['description']
    end

    fav.save!

    redirect_to :controller => 'favorites'
  end
end
