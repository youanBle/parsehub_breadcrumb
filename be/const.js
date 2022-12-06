 const root  = {
    type: "dir",
    children: {
      home: {
        type: "dir",
        children: {
          myname: {
            type: "dir",
            children: {
              "filea.txt": {
                type: "file",
              },
              "fileb.txt": {
                type: "file",
              },
              "projects": {
                type: "dir",
                children: {
                  mysupersecretproject: {
                    type: "dir",
                    children: {
                      mysupersecretfile: {
                        type: "file",
                      },
                    },
                  }
                },
              },
            }
          },
        },
      },
      user: {
        type: "dir",
        children: {
          mydifferentname: {
            type: "dir",
            children: {
              "filea.txt": {
                type: "file",
              },
              "nothing": {
                type: "dir",
                children: {
                },
              },
              "fileb.txt": {
                type: "file",
              },
              "projects": {
                type: "dir",
                children: {
                  mysupersecretproject: {
                    type: "dir",
                    children: {
                      mysupersecretfile: {
                        type: "file",
                      },
                    },
                  }
                },
              },
            }
          },
        },
      }
    },
  };

exports.root=root;