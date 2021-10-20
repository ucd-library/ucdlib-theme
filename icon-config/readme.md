# Font Awesome Icons

The UC Davis theme uses [Font Awesome (FA)](https://fontawesome.com/) for its icons. Instead of loading all FA icons and js, Library websites use pre-selected subsets of FA icons and loads them using the `ucdlib-icons` component. By using the [FA Subsetter tool](https://fontawesome.com/v5.15/how-to-use/on-the-desktop/other-topics/subsetter) and the [cork-icon-set-generator](https://github.com/UCDavisLibrary/cork-icon-set-generator) node utility, you can quickly construct custom iconsets.

## Picking Icons with the FA Subsetter Tool
First, download [the tool](https://fontawesome.com/v5.15/how-to-use/on-the-desktop/other-topics/subsetter) to your desktop. If you don't know the login credentials, contact ITIS. 

If you are modifiying an existing iconset, load the customization yml file (found in this repository) using the "Load Project" command. 

After building your set, save the project, and upload the associated yml file to this repo for version control reasons.

## Generating the ucdlib-iconset
In the FA tool, build your icon subset, which will generate a zip containing various asset files. Unzip it and extract the 'svgs' directory. If you want to include any non-FA svg icons, drop them in this directory now. 

Next, make sure you have [cork-icon-set-generator](https://github.com/UCDavisLibrary/cork-icon-set-generator) installed globally - `npm install -g @ucd-lib/cork-icon-set-generator`

Now run it with the `-v` and `-u` flags:
```
cork-icon-set-generator <icon-set-name> <fa-svgs-directory> -v -u
```
which will generate a js file, which you can either drop into the `ucdlib-icons` directory in this repository if it should be shared between application, or in your application directly. 

Finally, don't forget to import it into your app!:
```js
import "@ucd-lib/theme-elements/ucdlib/ucdlib-icons/<icon-set-name>";
```