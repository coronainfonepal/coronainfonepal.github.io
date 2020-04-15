require 'yaml'

STATS_PATH = "#{File.expand_path('../../', __FILE__)}/_data/corona_stats.yml"

module CoronaStats
   ENG_NP_NUMS = {
      "0" => '०', "1" => '१', "2" => '२', "3" => '३', "4" => '४',
      "5" => '५', "6" => '६', "7" => '७', "8" => '८', "9" => '९'
   }
   @stats_hash = {}
   @confirmed, @deaths, @recovered = ""
   @np_confirmed, @np_deaths, @np_recovered = ""

   def nepali_format(num)
      num.split('').map do |e|
         if e == ","
           e
         else
            ENG_NP_NUMS[e]
         end
      end.join
   end

   def load_stats_hash
      @stats_hash = YAML.load_file(STATS_PATH)
   end

   def update_stats_variables(world, nepal)
      @confirmed, @deaths, @recovered = world.split(':')
      @np_confirmed, @np_deaths, @np_recovered = nepal.split(':')
   end

   def update_english_stats
      @stats_hash["en"]["world"] = {
         "confirmed" => @confirmed, "deaths" => @deaths, "recovered" => @recovered
      }
      @stats_hash["en"]["nepal"] = {
         "confirmed" => @np_confirmed, "deaths" => @np_deaths, "recovered" => @np_recovered
      }
   end

   def update_nepali_stats
      @stats_hash["np"]["world"] = {
         "confirmed" => nepali_format(@confirmed),
         "deaths" => nepali_format(@deaths),
         "recovered" => nepali_format(@recovered)
      }
      @stats_hash["np"]["nepal"] = {
         "confirmed" => nepali_format(@np_confirmed),
         "deaths" => nepali_format(@np_deaths),
         "recovered" => nepali_format(@np_recovered)
      }
   end

   def update_corona_stats_file
      File.open(STATS_PATH, 'w') do |h|
         h.write @stats_hash.to_yaml
      end
   end

   def update(world, nepal)
      load_stats_hash
      update_stats_variables(world, nepal)
      update_english_stats
      update_nepali_stats
      update_corona_stats_file
   end

   def convert(num)
      nepali_format(num)
   end
end
