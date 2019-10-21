git push origin master
gatsby clean
gatsby build
aws s3 rm s3://www.billsimmonsnba.com --recursive
aws s3 cp ./public/. s3://www.billsimmonsnba.com --recursive --exclude "*.sh"
