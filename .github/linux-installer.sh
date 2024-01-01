VERSION="$(git describe --tags $(git rev-list --tags --max-count=1))"
DOWNLOAD_LINK="https://github.com/crowbartools/Firebot/releases/download/v5.60.0-beta2/firebot-${VERSION}-linux-x64.tar.gz"
TEMP_FILE="/tmp/Firebot-$(git show-ref v5.60.0-beta2 | cut -d ' ' -f1)"
INSTALLATION_FOLDER="/usr/bin/Firebot"
curl -Lo $TEMP_FILE $DOWNLOAD_LINK # Download .tag.gz file
sudo rm -f $INSTALLATION_FOLDER # Delete folder if it already exists (which should never happen)
sudo mkdir $INSTALLATION_FOLDER # Create folder so tar can extract into it
sudo tar -xzf $TEMP_FILE -C $INSTALLATION_FOLDER # Extract .tar.gz file into /tmp/Firebot
rm $TEMP_FILE
ls -la $INSTALLATION_FOLDER
