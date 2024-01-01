VERSION="$(git describe --tags $(git rev-list --tags --max-count=1))"
DOWNLOAD_LINK="https://github.com/crowbartools/Firebot/releases/download/v5.60.0-beta2/firebot-${VERSION}-linux-x64.tar.gz"
TEMP_FILE="/tmp/Firebot-$(git show-ref v5.60.0-beta2 | cut -d ' ' -f1)"
INSTALLATION_FOLDER="/usr/bin/Firebotv5"
SYMBOLIC_LINK="/usr/bin/firebot"
curl -Lo $TEMP_FILE $DOWNLOAD_LINK # Download .tag.gz file
sudo rm -f $INSTALLATION_FOLDER # Delete folder if it already exists (which should never happen)
sudo mkdir $INSTALLATION_FOLDER # Create folder so tar can extract into it
sudo tar -xzf $TEMP_FILE -C $INSTALLATION_FOLDER # Extract .tar.gz file into /tmp/Firebot
sudo curl -Lo "${INSTALLATION_FOLDER}/icon.png" "https://firebot.app/firebot-logo-stroke.png" # Download icon for use in the .desktop file
sudo ln -s "${INSTALLATION_FOLDER}/Firebot v5" $SYMBOLIC_LINK # Make symbolic link to be able to find Firebot without specifying a path (to be found in the PATH environment variable)
rm $TEMP_FILE # Clean up temp file
