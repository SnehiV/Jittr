@drinks.each do |drink|
  json.set!(drink.id) do
    json.extract! drink, *drink.attributes.keys
  end
end
