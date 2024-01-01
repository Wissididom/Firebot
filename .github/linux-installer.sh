VERSION="$(git describe --tags $(git rev-list --tags --max-count=1))"
echo "https://github.com/crowbartools/Firebot/releases/download/v5.60.0-beta2/firebot-${VERSION}-linux-x64.tar.gz"
