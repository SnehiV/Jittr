
#
@checkIns.each do |checkIn|
  json.set!(checkIn.id) do
    json.extract! checkIn, *checkIn.attributes.keys
    json.user checkIn.user
  end
end
