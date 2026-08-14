import re

with open('src/App.tsx', 'r') as f:
    text = f.read()

# 1. Imports
if 'Sun' not in text:
    text = text.replace('AlertCircle,', 'AlertCircle,\n  Sun,\n  Moon,')

# 2. State & Effect
state_old = "  const [orderForm, setOrderForm] = useState({"
state_new = """  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const [orderForm, setOrderForm] = useState({"""
if 'setIsDarkMode' not in text:
    text = text.replace(state_old, state_new)

# 3. DarkMode button
btn_pattern = r'<button className="[^"]*">\s*DarkMode\s*</button>'
btn_new = """<button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#8b7355] to-[#6b543b] hover:from-[#6b543b] hover:to-[#4e3c28] dark:from-gray-600 dark:to-gray-700 rounded-md shadow-md transition duration-300">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>"""
text = re.sub(btn_pattern, btn_new, text)

# 4. Class replacements for earthy light mode and dark mode
# Note: we add dark mode and also earthy tones
reps = [
    # Main container
    ('min-h-screen bg-gradient-to-br from-green-50 to-blue-50', 'min-h-screen bg-gradient-to-br from-[#fdfbf7] to-[#f4eee4] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 text-[#4a3f35] dark:text-gray-100'),
    
    # White backgrounds
    ('bg-white', 'bg-[#fffdfa] dark:bg-gray-800'),
    
    # Sections (Hero, Trust, etc)
    ('bg-gradient-to-r from-green-100 to-blue-100', 'bg-gradient-to-r from-[#f0ead6] to-[#e6dfcc] dark:from-gray-800 dark:to-gray-900'),
    ('from-blue-50 to-green-50', 'from-[#e8e1d2] to-[#f4ecd8] dark:from-gray-900 dark:to-gray-800'),
    ('from-green-50 to-blue-50', 'from-[#f4ecd8] to-[#e8e1d2] dark:from-gray-800 dark:to-gray-900'),
    
    # Grays
    ('bg-gray-50', 'bg-[#f8f5ee] dark:bg-gray-800'),
    ('bg-gray-100', 'bg-[#f3ebd8] dark:bg-gray-700'),
    ('bg-gray-200', 'bg-[#e8dec7] dark:bg-gray-600'),
    ('border-gray-300', 'border-[#d8ccb8] dark:border-gray-600'),
    ('hover:bg-gray-100', 'hover:bg-[#f3ebd8] dark:hover:bg-gray-700'),
    ('hover:bg-gray-200', 'hover:bg-[#e8dec7] dark:hover:bg-gray-600'),
    ('bg-gray-900', 'bg-[#3b3228] dark:bg-black'),
    
    # Text colors
    ('text-gray-900', 'text-[#362e26] dark:text-gray-50'),
    ('text-gray-700', 'text-[#5c5044] dark:text-gray-300'),
    ('text-gray-600', 'text-[#7a6b5c] dark:text-gray-400'),
    ('text-gray-500', 'text-[#968675] dark:text-gray-500'),
    ('text-gray-400', 'text-[#b0a190] dark:text-gray-400'),
    
    # Other element backgrounds
    ('bg-green-100', 'bg-[#eedbc5] dark:bg-green-900/30'),
    ('bg-blue-100', 'bg-[#e3d5c8] dark:bg-blue-900/30'),
    ('bg-yellow-100', 'bg-[#f5e6d3] dark:bg-yellow-900/30'),
    
    # Forms
    ('bg-[#fffdfa] dark:bg-gray-800 border', 'bg-[#fffdfa] dark:bg-gray-800 dark:text-white border'),
]

# Apply all exact string replacements
for old, new in reps:
    text = text.replace(old, new)
    
# Clean up duplicate inputs if any
with open('src/App.tsx', 'w') as f:
    f.write(text)

print("Patching complete!")
