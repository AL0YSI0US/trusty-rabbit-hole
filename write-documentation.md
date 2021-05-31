# [SOP] Write Documentation

**`Standard Operating Procedures`**

**Pre-requisites:**
- A github account with Write permission on the sourcecred/docs repo
  - Ask LB or Jojo to add you, then accept the invite (look in GitHub notifications or email) once they've sent it to you.
  - https://github.com/orgs/sourcecred/teams/docs/members

## Method 1: Netlify CMS admin portal (Easy)
**Instructions:**
- Navigate to the admin portal one of two ways:
  - Navigate directly to https://sourcecred.io/admin
  - Go to the docs page you want to edit on our docs site (https://sourcecred.io/docs)
  - click the "Edit this page" hyperlink: 

 ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FSourceCred%2FSHPsesNfSO.png?alt=media&token=a9aeaefd-4125-49e0-b62f-c037718de501)
  
- Click "login with github" to log in
  - The UI should be pretty understandable from here on out. Some notes:
  - Use the "Publish" -> "Publish Now" button to save changes.
  - New pages that are created will be accessible via an auto-generated url based on the collection and page title. 
   - They will not automatically appear in any menus. 
   - Menu changes cannot be done in the CMS portal and must be done using one of the below methods.

## Method 2: GitHub Editor (Medium + a little Dangerous)

**Instructions to edit an existing page:**

- Navigate to https://github.com/sourcecred/docs 
 - Browse the repo to find the file you want to edit. 
   - Our docs pages can be found in the `/docs` folder.
 - Click the pencil icon on the top right to edit.
 - Make your changes in the editor, then click "Preview" to make sure they look good.
 - In the "Commit Changes" section, optionally write a descriptive name 
     - Choose whether you want to submit a pull request for peer review OR commit directly to main (either is acceptable)
     - Next click the big green button!
 - If you chose to do a pull request, click "Create Pull Request" on the next page, and again on the next page, last paste the URL of the pull request in our `✅review-requests` discord channel.

**Instructions to create a new page:**

**Note:** this will create a page that can be accessed by URL, but it will not add it to the menu.
- Navigate to https://github.com/sourcecred/docs
- Find a folder inside the `/docs` that you want to put your new page in (the folders represent the url path)
- Click the "Add File" button on the top right and either create a new file with a `.md` extension at the end of the name, or upload an existing md file.
- Using the example below create a header at the top of the Markdown file you are working on:

```javascript

---
title: Page Title
description: Write what this page is about here
---

```
- Hit the "Preview" button to see how your changes look
- In the "Commit Changes" section, optionally write a descriptive name, choose whether you want to submit a pull request for peer review OR commit directly to main (either is acceptable), and then click the big green button!
- If you chose to do a pull request, click "Create Pull Request" on the next page, and again on the next page, and then paste the URL of the pull request in our review-requests discord channel.

**Instructions to add a page to the sidebar menu:**
- Navigate to https://github.com/sourcecred/docs/blob/main/sidebars.js
- Click the pencil icon on the top right to edit.
  - This is a little more technical and error-prone. 
   - You should probably get peer review. 
   - The strings represent the relative path starting at the /docs folder, followed by the markdown file name with the `.md` file extension omitted. 
   - For example `/docs/api/documentation.md` should be represented in this file as `api/documentation`
- Note that the menu has submenus also represented in this file. 
  - Place your page in the correct place in this file.
- Create a PR as decribed above in *editing an existing page*.

## Method 3: Locally clone the repo (Advanced)
- See the readme https://github.com/sourcecred/docs

## Troubleshooting
- If doc edits aren't being published there are 2 ways to debug:
  - You can check the CI test build for failures: https://github.com/sourcecred/docs/actions/workflows/test-build.yml
  - Use Method 3 to run `yarn build` to see what is causing the deployment failures.
  - Someone with the netlify login can check https://app.netlify.com/sites/sourcecred/overview to debug the deployment failures.
