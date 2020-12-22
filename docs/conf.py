import sys
import os
import re

sys.path.insert(0, os.path.abspath('..'))
sys.path.append(os.path.abspath('extensions'))

templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'
project = u'AuxBot-Python'
copyright = u'2020-2020, Auxtal'
language = None
gettext_compact = False
exclude_patterns = ['_build']
pygments_style = 'friendly'
html_experimental_html5_writer = True
html_theme = 'basic'
html_favicon = './images/discord_py_logo.ico'
html_static_path = ['_static']
html_search_scorer = '_static/scorer.js'
html_js_files = [
  'custom.js',
  'settings.js',
  'copy.js',
  'sidebar.js'
]