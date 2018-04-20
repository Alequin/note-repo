const map = require("lodash/fp/map")
const {notesSchema} = require("_common/database/schema")

const {
  columns: {
    title,
    summary,
    content
  }
} = notesSchema

const notesSeeds = Object.freeze([
  {
    [title.name]: "Computers",
    [summary.name]: "A computer is a device that can be instructed to carry out arbitrary sequences of arithmetic or logical operations automatically. The ability of computers to follow generalized sets of operations, called programs, enables them to perform an extremely wide range of tasks.",
    [content.name]: "this is content",
  },
  {
    [title.name]: "Fire",
    [summary.name]: "Fire is the rapid oxidation of a material in the exothermic chemical process of combustion, releasing heat, light, and various reaction products.[1] Slower oxidative processes like rusting or digestion are not included by this definition.",
    [content.name]: "this is content",
  },
  {
    [title.name]: "Trees",
    [summary.name]: "In botany, a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species. In some usages, the definition of a tree may be narrower, including only woody plants with secondary growth, plants that are usable as lumber or plants above a specified height.",
    [content.name]: "this is content",
  },
  {
    [title.name]: "Musca",
    [summary.name]: "Musca (Latin for 'fly') is a small constellation in the deep southern sky. It was one of twelve constellations created by Petrus Plancius from the observations of Pieter Dirkszoon Keyser and Frederick de Houtman and it first appeared on a celestial globe 35 cm (14 in) in diameter published in 1597 (or 1598) in Amsterdam by Plancius and Jodocus Hondius.",
    [content.name]: "this is content",
  },
  {
    [title.name]: "Debris disk",
    [summary.name]: "A debris disk is a circumstellar disk of dust and debris in orbit around a star. Sometimes these disks contain prominent rings, as seen in the image of Fomalhaut on the right. Debris disks have been found around both mature and young stars, as well as at least one debris disk in orbit around an evolved neutron star.",
    [content.name]: "this is content",
  },
])

function notesInsertValues(){
  return map((note) => {
    return [note[title.name], note[summary.name], note[content.name]]
  })(notesSeeds)
}

module.exports = notesInsertValues()
