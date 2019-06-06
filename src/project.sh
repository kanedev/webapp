#!/bin/sh

mkdir sass
cd sass
mkdir base
cd base
touch _reset.scss
touch _typography.scss
cd ..
mkdir components
cd components
touch _buttons.scss
touch _carousel.scss
touch _cover.scss
touch _dropdown.scss
touch _navigation.scss
cd ..
mkdir helpers
cd helpers
touch _variables.scss
touch _functions.scss
touch _mixins.scss
touch _placeholders.scss #class & placeholders helpers
cd ..
mkdir layout
cd layout
touch _grid.scss
touch _header.scss
touch _footer.scss
touch _sidebar.scss
touch _forms.scss
cd ..
mkdir pages
cd pages 
touch _home.scss
touch _contact.scss
cd ..
mkdir themes
cd themes
touch _theme.scss
touch _admin.scss
cd ..
mkdir vendors
 





#chmod -R 777 www

