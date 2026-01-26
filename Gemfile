# ==============================================================================
# Filename: Gemfile
# Created:  2026-01-25
# Updated:  2026-01-25
# DOCUMENT ASSISTANCE - Jekyll Dependencies
# ==============================================================================
# Run 'bundle install' to install these gems

source "https://rubygems.org"

# Jekyll Core
gem "jekyll", "~> 4.3"

# GitHub Pages compatibility (optional - use if deploying to GitHub Pages)
# Uncomment the line below if using GitHub Pages gem instead of standalone Jekyll
# gem "github-pages", group: :jekyll_plugins

# Jekyll Plugins
group :jekyll_plugins do
  gem "jekyll-feed"        # RSS feed generation
  gem "jekyll-seo-tag"     # SEO meta tags
  gem "jekyll-sitemap"     # Automatic sitemap generation
end

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb gem to v0.6.x on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
