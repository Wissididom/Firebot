VERSION="$(git describe --tags $(git rev-list --tags --max-count=1))"
DOWNLOAD_LINK="https://github.com/crowbartools/Firebot/releases/download/v5.60.0-beta2/firebot-${VERSION}-linux-x64.tar.gz"
TEMP_FOLDER="/tmp/Firebot-$(git show-ref v5.60.0-beta2 | cut -d ' ' -f1)"
echo $DOWNLOAD_LINK
echo $TEMP_FOLDER
