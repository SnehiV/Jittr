@locations.each do |location|
  json.set!(location.id) do
    json.extract! location, *location.attributes.keys
  end
end
