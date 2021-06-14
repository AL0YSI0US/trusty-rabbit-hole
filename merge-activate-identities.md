[SOP] Merge/Activate Identities
> Standard Operating Procedures
- **Prerequisites**
    - GitHub account with write access on sourcecred/cred repo
        - Devs already have perms. Non-devs can ask Thena or Topocount to be added to this team: https://github.com/orgs/sourcecred/teams/instance-helpers/members
    - git CLI installed (can also use a git GUI, but this tutorial will use the CLI)
        - open a terminal and run `git --version` to check if your computer already has it. If you don't have it, install it here: https://git-scm.com/downloads
    - Read and write access to this google sheet: https://docs.google.com/spreadsheets/d/1Az-Cew-rFG9S6Yo55GnjNIy7bssHvtrTtF45yeoxFtw/edit#gid=1048967430
        - Ask LB, Seth, Miguel, or Thena for access
    - Have a local clone of sourcecred/cred
        - Open a terminal, optionally change to a preferred directory ([tutorial](https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/bash/bash-commands-to-manage-directories-files/#:~:text=To%20change%20directories%2C%20use%20the,to%20check%20the%20new%20path.)), and then run: 

```plain text
git clone https://github.com/sourcecred/cred.git
cd cred
``` 
Instructions
Open a terminal (and navigate to your repo clone if not already there)
Run the following commands, changing any-name-you-want to a new branch name of your choice (I usually do something like batch-5-28-21)

plain text
1
git checkout main && git pull
2
git checkout -b any-name-you-want
3
yarn && yarn serve
Open this google sheet in a browser tab and scroll to the bottom. Bold items have been done, unbolded need to be done.
Open http://localhost:6006/#/admin in another browser tab. We will call this "the portal" from here on out.
For each unbolded row in the google sheet:
1. Merge identities
Note: This is an attack vulnerability. Ask for help if you see a suspicious request (specifically if a request seems to be merging accounts that do not belong to the same person)
In the portal, use either the "Filter identities" box or cmd-f / ctrl-f to search for the github, discord, and discourse identities in the list. Some may not exist yet, or the name might be slightly different from what appears in the spreadsheet. For example, Thena#1234 in the spreadsheet might appear as Thena-discord or something other variation in the portal.
Click on each matching identity name in the list in the portal and then look at the Aliases at the top of the portal to verify that you've found the correct identities. The Aliases should match the spreadsheet more faithfully and tell you which platform(s) it is for.
Bold in the spreadsheet each one that you found. Do not bold the ones you didn't find.
If you find several identities that belong to the same person: 
click one in the list in the porta
at the top use the "Add Alias" box to type and select the name of each of the other identities to merge them into the selected identity.
Click "Save ledger to disk"
Note: if at any point you make a mistake, just refresh the browser to undo changes since the last time you hit "Save ledger to disk"
2. If the person selected "Yes - I want to receive Grain." in the spreadsheet:
Bold "Yes - I want to receive Grain." in the spreadsheet
In the portal, click the checkbox either at the top after selecting the correct identity, or in the list below.
Click "Save ledger to disk"
3. If the identity name in the portal doesn't match the requested SourceCred username from the spreadsheet:
Bold the SourceCred username in the spreadsheet
Select the identity from the list in the portal
Change the name in the "name" box
Click "Update username"
Click "Save ledger to disk"
See if any partially bolded rows can be completed with similar steps (cases where missing identities have since been added to the ledger)
In the terminal, hit ctrl-c and run:

plain text
1
git add data/ledger.json
2
git commit -m "Batch merge and activate"
3
git push origin head -u
Copy the "Create a pull request" URL that is output in the terminal and paste it into a browser.
Click the green "Create pull request" button
Copy the URL and paste it into the #review-requests discord channel, and tag @Thena, @panchomiguel, and @topocount (repeat the next day if you haven't heard back)

