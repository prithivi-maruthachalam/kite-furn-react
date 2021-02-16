# Website for KiteFurn

### Built using React and Razzle for Server Side Rendering
   

## Design Specs
- Title Size 
  - Big Screens 85px
  - Small Screens 11vw
- Subtitle Size
  - Big Screens 40px
  - Small Screens 5.5vw
- Content
  - Big Screens 22px
  - Small Screens 16px

## For Contributors
- Pages are organised into individual folders inside components/
- Each page has an index file where all components in that page are imported
- Write styles in individual files for each component and import the style only once in the corresponding component's file.
- Write components as horizontal sections of a page, where each component is one horizontal strip (refer home page for more)
- Create a new branch for each component
- Refer exisitng code for the home page incase of any ambiguity regarding styling, sytax and project structure.

## Git workflow
### Before starting work on a new component, do the following
- ### Make sure you're in the master branch
```
git checkout master
```

- ### Create a new branch. Use the component name for the branch
```
git checkout -b <branch name>
```
#### The above command creates and switches to the new branch

- ### Once you've made a few changes and it is time to commit
```
git add .
git commit -m "Commit message"
```

- ### Pushing for the first time. This is assuming that you've already set up the remote as origin
```
git push -u origin <branch name>
```
### If you havent set up the remote, first check if you have
```
git branch -r
```
### It should print something like this
```
origin/master
```
### If it does, you're good to go. If it doesn't then you'll have to create a remote
```
git remote add origin <url> master
```

### Once a remote is created, you can push using the command mentioned earlier
```
git push -u origin <branch name>
```

- ### from the next time onwards, you can push as you normally would
```
git push
```


## TODO
### Work on 3 Primary sections
- ### Customised Interiors
    #### Order to be finalised later. Each of the following is one component. These components together will make a page 
  - Eateries & Bakeries
  - Glass Stairs
  - Hotels
  - Mantaps & Halls
  - Offices
  - Residence Interiors (Has link to Residence Interiors Page)
  - Retail, Departmental Stores
- ### Residence Interiors
  - Bedroom Interiors
  - Bedroom Sets
  - Dining Spaces
  - Glass Stairs
  - Living Spaces
  - Space Saving Cots
  - Space Saving Wardrobes
- ### Modular Kitchens (later)
    #### Will be handled in a later phase of development