VERSION="$(git describe --tags $(git rev-list --tags --max-count=1))"
DOWNLOAD_LINK="https://github.com/crowbartools/Firebot/releases/download/v5.60.0-beta2/firebot-${VERSION}-linux-x64.tar.gz"
TEMP_FILE="/tmp/Firebot-${VERSION}"
INSTALLATION_FOLDER="/usr/bin/Firebotv5"
SYMBOLIC_LINK="/usr/bin/firebot"
echo "Downloading .tar.gz file"
curl -fsSLo $TEMP_FILE $DOWNLOAD_LINK
echo "Making sure the installation folder exists"
sudo mkdir -p $INSTALLATION_FOLDER
echo "Extract Firebot into ${INSTALLATION_FOLDER}"
sudo tar -xzf $TEMP_FILE -C $INSTALLATION_FOLDER
echo "Downloading icon for the .desktop file into ${INSTALLATION_FOLDER}/icon.png"
sudo curl -fsSLo "${INSTALLATION_FOLDER}/icon.png" "https://firebot.app/firebot-logo-stroke.png"
echo "Creating symbolic link to be able to omit the path to 'Firebot v5' and for the name to be just firebot"
sudo ln -sf "${INSTALLATION_FOLDER}/Firebot v5" $SYMBOLIC_LINK
echo "Downloading .desktop file to be able to run Firebot without a terminal from a display manager like GDM"
sudo curl -fsSLo "/usr/share/applications/firebot.desktop" "https://github.com/Wissididom/Firebot/raw/add-linux-installer/.github/firebot.desktop"
echo "Deleting temporary file"
rm $TEMP_FILE # Clean up temp file
