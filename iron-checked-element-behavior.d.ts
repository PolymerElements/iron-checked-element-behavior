/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-checked-element-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts" />
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts" />

declare namespace Polymer {

  /**
   * Use `Polymer.IronCheckedElementBehavior` to implement a custom element
   * that has a `checked` property, which can be used for validation if the
   * element is also `required`. Element instances implementing this behavior
   * will also be registered for use in an `iron-form` element.
   */
  interface IronCheckedElementBehavior {

    /**
     * Overriden from Polymer.IronFormElementBehavior
     */
    value: string|null|undefined;

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: boolean|null|undefined;

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: boolean|null|undefined;

    /**
     * Returns false if the element is required and not checked, and true otherwise.
     *
     * @param _value Ignored.
     * @returns true if `required` is false or if `checked` is true.
     */
    _getValidity(_value?: any): boolean;
    created(): any;

    /**
     * Update the aria-required label when `required` is changed.
     */
    _requiredChanged(): any;

    /**
     * Fire `iron-changed` when the checked state changes.
     */
    _checkedChanged(): any;

    /**
     * Reset value to 'on' if it is set to `undefined`.
     */
    _valueChanged(): any;
  }

  const IronCheckedElementBehavior: object;
}
