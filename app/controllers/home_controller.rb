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
    fav = Favorite.new do |f|
      f.link = params[:link]
      f.source = params[:source]
      f.title = params[:title]
      f.description = params[:description]
    end

    fav.save!

    redirect_to :controller => 'favorites', :action => 'show', id: fav.id
  end
end
