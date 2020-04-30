/// <reference path="models/dragdrop.ts"/>
/// <reference path="models/projectstatus.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="utils/validation.ts"/>
/// <reference path="decorators/autobind.ts"/>
/// <reference path="decorators/autobind.ts"/>
/// <reference path="components/ProjectInput.ts"/>
/// <reference path="components/ProjectItem.ts"/>
/// <reference path="components/ProjectList.ts"/>

namespace App {
  new ProjectInput();
  new ProjectList("ativos");
  new ProjectList("finalizados");
}
