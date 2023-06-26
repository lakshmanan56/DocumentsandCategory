# DocumentsandCategory
DocumentsandCategory



-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------

/wtd define data type for 'let'

 let myName = "Alice";

 let myName: string = "Alice";
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------

/wtd non-complaint

 getReadableStatus(job) {
        return job.isRunning() ? "Running" : job.hasErrors() ? "Failed" : "Succeeded ";  // Noncompliant
 }

function getReadableStatus(job) {
  if (job.isRunning()) {
    return "Running";
  }
  return job.hasErrors() ? "Failed" : "Succeeded";
}

Correct 
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------
/wtd use Enum syntax instead of const

const GENRE = {
  ROMANTIC: 'romantic',
  DRAMA: 'drama',
  COMEDY: 'comedy',
  DOCUMENTARY: 'documentary',
}

configureFilm(GENRE.COMEDY);


  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
        // some logic to be executed 
    }
  }


enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY,
}

configureFilm(GENRE.COMEDY);


  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
        // some logic to be executed 
    }
  }

---------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------


/wtd compare datatype 

   if(this.isEnable == true) {
            return true;
        }

if(this.isEnable === true)

--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------








