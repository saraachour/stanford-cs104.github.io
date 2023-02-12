set nocompatible
filetype off

" ==== Vim Options ==== "

" Get and enable default file indents/plugins.
filetype plugin indent on

" Show line nubers
set number

" Turn on syntax highlighting
syntax on

" You can choose a color scheme here
colorscheme default

" Highlights what you search for
set hlsearch

" Turns on incremental search (search-as-you-type)
set incsearch

" Turns on auto indentation
set autoindent

" Makes vim try to guess the next indentation level intelligently.
set smartindent

" Default tab width -- I like 4, but CS110 uses 2.
set tabstop=2
set shiftwidth=2

" Make tabs into spaces
set expandtab

" Wrap lines when moving around with the arrow keys or h/l
set whichwrap+=<,>,h,l,[,]

" Don't hard wrap lines.
set formatoptions=t

" Don't show lines as wrapped.
set nowrap

" Move around Vim with the mouse!
set mouse=a

" Allow us to backspace
set backspace=indent,eol,start

" Shows partial commands as they're entered
set showcmd

" Enables hidden buffers
set hidden

" ==== Key Remaps ==== "
" Press enter when you're done searching to remove highlights
nnoremap <CR> :nohlsearch<CR><CR>

" Toggle wrap with \w
nnoremap <leader>w :set wrap!<CR>

" Type \c to close any extra windows that are opened.
nnoremap <leader>c :ccl <bar> lcl <bar> pclose<CR>
inoremap <leader>c <ESC>:ccl <bar> lcl <bar> pclose<CR>a

" Press Ctrl+a/Ctrl+d to switch to the left/right tab.
nnoremap <C-a> :tabp<CR>
nnoremap <C-d> :tabn<CR>
inoremap <C-a> <ESC>:tabp<CR>i
inoremap <C-d> <ESC>:tabn<CR>i

" Press Ctrl+s to save
nnoremap <C-s> :w<CR>
inoremap <C-s> <ESC>:w<CR>a


" ==== Colors! ==== "
" Search highlighting
highlight Search cterm=underline ctermbg=22

" Line number highlighting
highlight LineNr ctermfg=244 ctermbg=233

" Shows a line at the 100th character (your line is probably too long if it gets here!)
set colorcolumn=100
highlight ColorColumn ctermbg=233 guibg=Black
