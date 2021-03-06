require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "TrstlrComponents"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  trstlr-components
                   DESC
  s.homepage     = "https://github.com/github_account/react-native-trstlr-horizontal-wheel-picker"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Your Name" => "yourname@email.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/valentinjob/trstlr-components.git", :tag => "#{s.version}" }
  s.swift_version = '5.0'

  s.module_name  = 'TrstlrComponents'

  s.source_files = "lib/ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.resources = 'lib/ios/**/**/*.{png,storyboard,xib}'

  s.dependency "React"
  # ...
  # s.dependency "..."
end

