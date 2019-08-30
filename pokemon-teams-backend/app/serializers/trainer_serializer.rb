class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :pokemons

  def pokemons
    self.object.pokemons.map do |pokemon|
      {id: pokemon.id,
      species: pokemon.species,
      nickname: pokemon.nickname}
    end
  end


end
