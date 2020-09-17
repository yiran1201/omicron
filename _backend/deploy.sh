rm -rf build && \
cd ../_frontend && \
npm run build && \
mv build/ ../_backend && \
cd ../_backend && \
gcloud --quiet app deploy ./app.yaml
