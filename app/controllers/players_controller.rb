class PlayersController < ApplicationController

  def index
    players = Player.all
    puts "********** #{players}"
  end
end
