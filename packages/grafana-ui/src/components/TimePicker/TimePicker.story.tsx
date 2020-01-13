import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TimePicker } from './TimePicker';
import { UseState } from '../../utils/storybook/UseState';
import { withCenteredStory } from '../../utils/storybook/withCenteredStory';
import { TimeFragment } from '@grafana/data';
import { dateTime } from '@grafana/data/src/datetime';

const TimePickerStories = storiesOf('UI/TimePicker', module);

TimePickerStories.addDecorator(withCenteredStory);

TimePickerStories.add('default', () => {
  return (
    <UseState
      initialState={{
        from: dateTime(),
        to: dateTime(),
        raw: { from: 'now-6h' as TimeFragment, to: 'now' as TimeFragment },
      }}
    >
      {(value, updateValue) => {
        return (
          <TimePicker
            timeZone="browser"
            value={value}
            onChange={timeRange => {
              action('onChange fired')(timeRange);
              updateValue(timeRange);
            }}
            onMoveBackward={() => {
              action('onMoveBackward fired')();
            }}
            onMoveForward={() => {
              action('onMoveForward fired')();
            }}
            onZoom={() => {
              action('onZoom fired')();
            }}
          />
        );
      }}
    </UseState>
  );
});
