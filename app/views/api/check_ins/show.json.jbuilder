
json.set!(@checkIn.id) do
  json.extract! @checkIn, *@checkIn.attributes.keys
end
