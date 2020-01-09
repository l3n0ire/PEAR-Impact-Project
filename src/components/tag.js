import React, {Component} from 'react';
import {Box, Grommet, Button} from 'grommet';

class Tag extends Component {
  render() {
    return (
      <div>
        { this.props.tags.length > 0 ? (
              <Grommet theme={{global: {hover: {color: 'dark-1'}}}}>
                <Box
                  direction="row"
                  alignContent="center"
                  pad={{bottom: 'small'}}
                >

                  {this.props.tags.slice(0, 10).map((tag) => (
                    <React.Fragment>
                      <Box
                        direction="row"
                        style={{borderRadius: '5px',
                          margin: '0 1vh 0 0 ',
                        }}
                        background="light-2"
                      >
                        <Button
                          style={{
                            borderRadius: '5px',
                            padding: '1vh',
                            transition: '0.25s',
                          }}
                          color="black"
                          hoverIndicator="light-4"
                          plain
                          href={'/Search?q=' + tag}
                          label={tag}
                        />
                      </Box>
                    </React.Fragment>
                  ))}
                </Box>
              </Grommet>
            ) : null}
      </div>
    );
  }
}

export default Tag;
