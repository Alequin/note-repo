module.exports = {

  notesSchema: {
    name: "notes",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      title: {name: "title",  type: "VARCHAR(255) UNIQUE"},
      summary: {name: "summary",  type: "TEXT"},
      content: {name: "content",  type: "TEXT"},
      creationDate: {name: "creation_date",  type: "DATE default current_timestamp"}
    },
  },

  tagsSchema: {
    name: "tags",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      name: {name: "name",  type: "VARCHAR(255) UNIQUE"}
    }
  },

  sourcesSchema: {
    name: "sources",
    columns: {
      id: {name: "id", type: "SERIAL8 "},
      name: {name: "name", type: "VARCHAR(255) UNIQUE"},
      islink: {name: "islink", type: "BOOLEAN"},
      location: {name: "location", type: "TEXT"}
    }
  },

  noteTagsSchema: {
    name: "note_tags",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      noteId: {name: "noteid", type: "SERIAL8"},
      tagId: {name: "tagid", type: "SERIAL8"}
    }
  },

  noteSourcesSchema: {
    name: "note_sources",
    columns: {
      id: {name: "id", type: "SERIAL8"},
      noteId: {name: "noteid", type: "SERIAL8"},
      sourceId: {name: "sourceid", type: "SERIAL8"}
    }
  }
}
