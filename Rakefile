require 'html-proofer'
require 'jekyll'
require_relative 'lib/corona_stats.rb'

multitask default: %i[link_check clean]

# Rake Jekyll build tasks
task :build do
  puts 'Building site...'
  Jekyll::Commands::Build.process(profile: true)
end

# Rake Jekyll build tasks
task :clean do
  puts 'Cleaning up _site...'
  Jekyll::Commands::Clean.process({})
end

desc 'Check links'
task :link_check => [:build] do
  options = {
    assume_extension: true,
    empty_alt_ignore: true,
    allow_hash_href: true,
    only_4xx: true
  }
  begin
    puts "Running html proofer..."
    HTMLProofer.check_directory("./_site", options).run
  rescue => msg
    puts "#{msg}"
  end
end

desc 'Update Corona Stats'
task :update_corona_stats do
  include CoronaStats

  CoronaStats.update(ENV['world'], ENV['nepal'])
end

desc 'Convert to Nepali Numbers'
task :to_np do
  include CoronaStats

  puts CoronaStats.convert(ENV['num'])
end
