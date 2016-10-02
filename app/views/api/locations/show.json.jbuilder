
json.set!(@location.id) do
  json.extract! @location, *@location.attributes.keys
end
