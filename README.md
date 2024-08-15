# maven-artifact-version-extractor

# Maven Artifact Version Extractor - GitHub Actions

If you want to extract a maven artifact version in GitHub Actions, this actions helps you to do so.

For example, you want to extract `1.1.0-SNAPSHOT` version from the below pom.xml file:
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.org.web</groupId>
    <artifactId>my-org-parent</artifactId>
    <name>My Example Project</name>
    <version>1.1.0-SNAPSHOT</version>

    <packaging>pom</packaging>
    ....
</project>
```

then this action helps to extract it.

## Inputs

### `file_path`

**Required** The path of the pom.xml file or XML file.

## Outputs

### `version`

The found artifact version

## Example usage

```yaml
on: [push, workflow_dispatch]

jobs:
  myJob:
    runs-on: ubuntu-latest
    name: Extract artifact version
    steps:
      - name: checkout
        uses: actions/checkout@v3

      - name: Extract version from pom.xml file
        id: version-extractor
        uses: nswdcs/maven-artifact-version-extractor@v1.0.0
        with:
          file_path: ${{ github.workspace }}/pom.xml
      - name: Get the output version
        run: echo "The found version ${{ steps.version-extractor.outputs.version }}"

```
