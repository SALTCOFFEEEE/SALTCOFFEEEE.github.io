# -*- encoding: utf-8 -*-
# stub: polytexnic 1.7.4 ruby lib

Gem::Specification.new do |s|
  s.name = "polytexnic".freeze
  s.version = "1.7.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Michael Hartl".freeze, "Nick Merwin".freeze]
  s.date = "2022-08-19"
  s.description = "Core translation engine for the softcover gem".freeze
  s.email = ["michael@softcover.io".freeze]
  s.executables = ["polytexnic".freeze]
  s.files = ["bin/polytexnic".freeze]
  s.homepage = "https://github.com/softcover/polytexnic".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.7".freeze
  s.summary = "Convert from PolyTeX & Markdown to HTML & LaTeX".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<nokogiri>.freeze, [">= 1.6.0", "< 2.0"])
    s.add_runtime_dependency(%q<pygments.rb>.freeze, ["~> 2.1"])
    s.add_runtime_dependency(%q<msgpack>.freeze, ["~> 1.2.0"])
    s.add_runtime_dependency(%q<kramdown>.freeze, [">= 2.0", "< 3.0"])
    s.add_runtime_dependency(%q<json>.freeze, ["~> 2.3.0"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 2.14"])
    s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.15.1"])
  else
    s.add_dependency(%q<nokogiri>.freeze, [">= 1.6.0", "< 2.0"])
    s.add_dependency(%q<pygments.rb>.freeze, ["~> 2.1"])
    s.add_dependency(%q<msgpack>.freeze, ["~> 1.2.0"])
    s.add_dependency(%q<kramdown>.freeze, [">= 2.0", "< 3.0"])
    s.add_dependency(%q<json>.freeze, ["~> 2.3.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.14"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.15.1"])
  end
end
