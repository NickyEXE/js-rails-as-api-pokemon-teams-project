class PokemonsController < ApplicationController


    def create
        @trainer = Trainer.find(params[:id])
        if @trainer.pokemons.length < 6
            name = Faker::Name.first_name
            species = Faker::Games::Pokemon.name
            Pokemon.create(nickname: name, species: species, trainer_id: params[:id])
        end
        render json: Trainer.all
    end

    def destroy
        Pokemon.find(params[:id]).destroy
        render json: Trainer.all
    end

end
