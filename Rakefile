require 'html-proofer'
require 'jekyll'

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
