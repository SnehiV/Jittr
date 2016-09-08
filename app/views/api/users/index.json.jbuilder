@users.each do |user|
  json.set!(user.id) do
    json.extract! user, *user.attributes.keys
  end
end
