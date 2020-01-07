# REAL-Themes

Themes and related objects for the frontend.

## Initialization

Run `npm init` in the root of the repository to install required packages.

You will need to have access to the AWS environment you wish to deploy to. This is usually this is done by setting up the appropriate [AWS credentials file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

## To add, edit or delete themes or related objects

  - Make the changes you'd like to see to files in the `bucket` directory
  - Run `git commit` to save those changes to the repo history
  - Run `sls deploy` to deploy those changes. Note that `--stage` defaults to **production** if unset.

A few important CloudFront urls will be printed to the console in the output of `sls deploy`.

Note that:
  - a CloudFront invalidation for `themes.jsoon` is kicked off at the end of `sls deploy`, but the command does not wait for the invalidation to complete. Invalidations usually take 1-2 minutes to complete. Progress can be monitored via the AWS console.
  - `sls deploy` will add new objects from the `bucket` directory to the S3 bucket, but will never delete objects from the S3 bucket. If you actually want to delete an object, you should:
    - be sure nothing is still using that object (ex: do any users have that placeholder profile photo set as theirs?)
    - manually delete it from the bucket

For further detail:
  - [serverless-s3-deploy documentation](https://github.com/funkybob/serverless-s3-deploy)
  - [serverless-cloudfront-invalidate documentation](https://github.com/aghadiry/serverless-cloudfront-invalidate)
  - [serverless cli documentation](https://serverless.com/framework/docs/providers/aws/cli-reference/).
