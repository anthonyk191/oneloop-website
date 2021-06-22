# Making changes to your website

## How to make changes



## How to test changes

### Testing only the frontend (email functions won't work)

* `cd <path_to_directory>`
* `npm start`
* website will open at `http://localhost:3000/`

### Testing both the frontend and backend together (emails will work)

* open Git Bash
* `cd <path_to_directory>`
* `npm run build`
* `firebase functions:config:get > .runtimeconfig.json`
* `firebase serve`
* website is usually available at `http://localhost:5000/`

## When done testing
* CTRL + C to end the process
* terminal might prompt with `Terminate batch job? (Y/n)`
	* type `Y` and enter

## Deploying your changes
* `cd <path_to_directory>`
* `npm run build`
* `firebase deploy`

## Stuck?

Fill out our bug fix form if you're ever stuck on fixing your website: https://forms.gle/gz6dxTwCKDDhw5xw6
