# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Sentence.create({ sequence: 1, source: 'English Class', text: 'The quick brown fox jumped over the lazy dogs' })
Sentence.create({ sequence: 2, source: 'English Class', text: 'It was the best of times, it was the worst of time' })
Sentence.create({ sequence: 3, source: 'English Class', text: 'It was the best of curries, it was the worst of curries' })
